module Jekyll
  class CollapsibleSectionsConverter < Converter
    safe true
    priority :low
    
    def matches(ext)
      ext =~ /^\.md$/i
    end
    
    def output_ext(ext)
      ".html"
    end
    
    def convert(content)
      # First have Jekyll process the Markdown
      html = Jekyll::Converters::Markdown.new(@config).convert(content)
      
      # Then replace h1-h6 tags with collapsible sections
      level = 1
      while level <= 6
        html = html.gsub(/<h#{level}([^>]*)>(.*?)<\/h#{level}>/m) do |match|
          attributes = $1
          title = $2
          section_id = title.strip.downcase.gsub(/\s+/, '-').gsub(/[^\w-]/, '')
          
          <<~EOS
            <div class="collapsible-section">
              <h#{level}#{attributes} class="collapsible-header" data-target="section-#{section_id}">
                <span class="collapse-icon">▼</span>
                #{title}
              </h#{level}>
              <div id="section-#{section_id}" class="collapsible-content">
          EOS
        end
        
        # Match the next heading of same or higher level to close the section
        html = html.gsub(/(<div id="section-.*?" class="collapsible-content">)(.*?)(<h[1-#{level}])/m) do
          "#{$1}#{$2}</div>#{$3}"
        end
        
        level += 1
      end
      
      # Close any remaining open sections
      html += "</div>" * html.scan(/<div id="section-.*?" class="collapsible-content">/).count - html.scan(/<\/div>/).count
      
      html
    end
  end
end