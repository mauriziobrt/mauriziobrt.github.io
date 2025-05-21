---
layout: post
date:   2025-02-20 12:11:54 +0200
categories: research
title: "Sonification of Bibliometric Data"
media: sonification
figure: assets/images/Screenshot 2025-04-06 at 22.50.43(1).png
---
  <style>
    @font-face {
        font-family: 'MyCustomFont';
        src: url('web/Abordage-Regular.woff2') format('woff2'),
            url('web/Abordage-Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'terminal_grotesque';
        src: url('web/terminal-grotesque-webfont.eot');
        src: url('web/terminal-grotesque-webfont.eot?#iefix') format('embedded-opentype'),
            url('web/terminal-grotesque-webfont.woff2') format('woff2'),
            url('web/terminal-grotesque-webfont.woff') format('woff'),
            url('web/terminal-grotesque-webfont.ttf') format('truetype'),
            url('web/terminal-grotesque-webfont.svg#terminal_grotesqueregular') format('svg');
        font-weight: normal;
        font-style: normal;
    }
    
    .cormorant-roman {
        font-family: "Cormorant", serif;
        font-optical-sizing: auto;
        font-weight: 600;
        font-style: normal;
    }

    * {
        margin: 1%;
        padding: 0;
        box-sizing: border-box;
        font-family: "Cormorant", serif;
        line-height: 1.8;
    },

    a:link, a:visited {
        /* color: rgb(114, 63, 172); */
        color: rgb(11, 62, 171);
        background-color: transparent;
        /* text-decoration: none; */
    }

    .amiri-quran-regular {
        font-family: "Amiri Quran", serif;
        font-weight: 400;
        font-style: normal;
    }
    html, body {
        /* height: 100%; */
        min-width:100%;
        /* overflow: hidden; Prevent outer page scroll */
    }
    .two-columns {
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
    }

    .two-columns .column {
        flex: 1 1 300px; /* This will make columns break to new line when viewport is small */
    }
</style>

<body>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Amiri+Quran&family=Cormorant:ital,wght@0,300..700;1,300..700&family=Figtree:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet">
<script type="module">
    import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';
    mermaid.initialize({ startOnLoad: true });
</script>
</body>

# <center> I Force Graph Sonification </center>

A side effect of the exponential growth of scientific publications is the generation of very large bibliometric databases containing vast amounts of metadata. Making sense of this data and communicating it effectively to researchers requires efficient and creative strategies. 
In this work, we present an interactive sonification system for the exploration of bibliometric data. We limited our data to publications containing **'sonification'** or **'auditory display'** in the title, abstract, or keywords.
We developed an interactive web-based interface that combines visual graph representation with four sonification strategies, each designed to highlight different aspects of the publications in the graph. This interface allows users to interactively transform bibliometric parameters associated to each node in the graph into perceivable sound features revealing citation patterns and scholarly relationships. Our approach demonstrates how auditory display can complement traditional visual bibliometric analysis, providing new perspectives on research networks and publication impact while maintaining an aesthetically pleasing sonic experience. 

<div style="display: flex; justify-content: center;">
<img src="http://127.0.0.1:5500/docs/assets/images/Screenshot 2025-04-06 at 22.50.43(1).png" width="50%"  >
</div>

# <center> II Transformations </center>

We evaluated the possible sound transformations easily accessible and the potential development of new ones. 

## <center> Supercollider Transformations </center>
List of available 2 sounds complex transformations in Supercollider:

<pre class="mermaid">
    graph TD
    A[Real Time Transformations] --> B[PV_MagMap]
    A[Real Time Transformations] --> C[PV_Morph]
    A[Real Time Transformations] --> D[PV_SpectralMap]
    A[Real Time Transformations] --> E[PV_BinWipe]
    A[Real Time Transformations] --> F[PV_XFade]
    A[Real Time Transformations] --> G[FluidNMFMorph]
    A[Real Time Transformations] --> G[Convolution]
</pre>


## <center> CDP Transformations </center>


{% include two-columns.html 
  column1="## Transitions
  
  * Morph or glide between sounds; time-stretch
  * Create hybrids, imposing characteristics of one sound on another
  * Extensive support for automation (time-varying values)
  "
  
  column2="## Spectral
  1. Reshape spectral content: arpeggiate, average, blur, randomize, shuffle, trace, freeze, time-expand
  2. Sustain spectral bands, with optional tuning (see example below)
3. Slice spectrum into bands and process individually: delay, pitch-shift etc."
%}

## <center> Method </center>

First let's create n group of similar samples with different morphologies.
But I have too many samples, where do I start?
What if I create a database just for this scope? This way I get the method and work with less files. It's a proof of concept.

# <center> III The Book of Dreams aka Future Works aka Things I should develop myself </center>

Granular morphing:

<iframe style="border: 1px solid rgba(0, 0, 0, 0.0);" width="90%" height="450" src="https://embed.figma.com/design/vJqgTxYRu1hAGZzeHHjXIg/Timbral-Sonification?node-id=95-41&embed-host=share" allowfullscreen></iframe>

