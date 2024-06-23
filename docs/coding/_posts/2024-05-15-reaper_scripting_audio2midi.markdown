---
layout: post
title:  "Audio to midi in Reaper"
date:   2024-05-28 12:11:54 +0200
categories: coding
software: Lua, ReaScript, Python
---

# Transforming Audio to MIDI with ReaScript and Spotify's Basic Pitch: A Step-by-Step Guide

<br>

> 🎶 [Download the script here](https://drive.google.com/file/d/1FR9El_eAc5ny9ilp1h5yp4qNUKl77V8C/view?usp=sharing)

<br>

In the ever-evolving world of digital music production, converting audio files to MIDI can significantly enhance your creative workflow. By utilizing ReaScript, REAPER's powerful scripting language, along with Spotify's Basic Pitch, you can seamlessly transform your audio tracks into MIDI files. This blog post will guide you through a ReaScript designed for this purpose.

## Overview

<br>

![audio2midi](/assets/images/audiotomidi.png)

<br>

The script we'll explore uses REAPER's ImGui library for a user-friendly graphical interface and leverages Spotify's Basic Pitch tool for audio-to-MIDI conversion. Below, we'll break down the script and its components.

## Script Breakdown

### Initializing ImGui Context

The script begins by setting up the ImGui context. ImGui is a graphical user interface library that allows us to create a window within REAPER for user input.

```lua
package.path = reaper.ImGui_GetBuiltinPath() .. '/?.lua'
local ImGui = require 'imgui' '0.9.1'
local font = ImGui.CreateFont('sans-serif', 13)
local ctx = ImGui.CreateContext('My script')
```

### Utility Functions

#### Create a New Track

This function inserts a new track at the end of the track list.

```lua
function createNewTrack()
  reaper.InsertTrackAtIndex(reaper.CountTracks(0), true)
  local track = reaper.GetTrack(0, reaper.CountTracks(0) - 1)
  return track
end
```

#### Change File Extension to MIDI

This function changes the file extension of the given file path to `.mid`.

```lua
function changeFileExtensionToMidi(filePath)
  return filePath:gsub("%.%w+$", "_basic_pitch.mid")
end
```

#### Insert Media File into a Track

This function inserts a media file into a specified position in the track.

```lua
function insertMediaFile(filePath, position)
  if reaper.file_exists(filePath) then
    reaper.InsertMedia(filePath, 1)
  else
    reaper.ShowMessageBox("The file path is invalid.", "Error", 0)
  end
end
```

#### Get Selected Media Item

This function retrieves the currently selected media item in REAPER.

```lua
function get_selected_media_item()
  local item = reaper.GetSelectedMediaItem(0, 0)
  if item == nil then
    reaper.ShowMessageBox("Please select a media item first.", "Error", 0)
    return nil
  end
  return item
end
```

#### Get File Path of the Media Item

This function retrieves the file path of the selected media item.

```lua
function get_media_item_filepath(item)
  local take = reaper.GetActiveTake(item)
  if take == nil then
    reaper.ShowMessageBox("No active take found.", "Error", 0)
    return nil
  end
  local source = reaper.GetMediaItemTake_Source(take)
  return reaper.GetMediaSourceFileName(source, "")
end
```

### Main Function

The main function orchestrates the conversion process by calling the appropriate utility functions and executing the Basic Pitch command.

```lua
function main(listvalues)
  reaper.Undo_BeginBlock()
  
  local item = get_selected_media_item()
  if item == nil then return end
  
  local input_path = get_media_item_filepath(item)
  local start_pos = reaper.GetMediaItemInfo_Value(item, "D_POSITION")
  local output_path = input_path:match("(.*/)")
  local output_file = changeFileExtensionToMidi(input_path)
  
  os.remove(output_file)
  
  local first_command = string.format('/opt/homebrew/bin/basic-pitch "%s" "%s" --onset-threshold "%f" --frame-threshold "%f" --minimum-note-length "%f" --minimum-frequency "%f" --maximum-frequency "%f"', output_path, input_path, listvalues.onset, listvalues.frame, listvalues.minlength, listvalues.minfreq, listvalues.maxfreq)
  
  local handle = io.popen(first_command)
  local result = handle:read("*a")
  handle:close()
  
  insertMediaFile(output_file, start_pos)
  reaper.UpdateArrange()
  reaper.Undo_EndBlock("Process media item and create new take", -1)
end
```

### GUI Function

The `gui` function sets up the ImGui window where users can adjust parameters for the conversion process.

```lua
local function gui()
  ImGui.PushFont(ctx, font)
  ImGui.SetNextWindowSize(ctx, 400, 300, ImGui.Cond_FirstUseEver)
  
  local visible, open = ImGui.Begin(ctx, 'Audio to MIDI', true)
  if visible then
    rv, values.onset = ImGui.SliderDouble(ctx, 'ONSET_THRESHOLD', values.onset, 0.0, 1.0)
    rv, values.frame = ImGui.SliderDouble(ctx, 'FRAME_THRESHOLD', values.frame, 0.0, 1.0)
    rv, values.minlength = ImGui.SliderDouble(ctx, 'MINIMUM_NOTE_LENGTH', values.minlength, 100, 10000)
    rv, values.minfreq = ImGui.SliderDouble(ctx, 'MINIMUM_FREQUENCY', values.minfreq, 40, 1000)
    rv, values.maxfreq = ImGui.SliderDouble(ctx, 'MAXIMUM_FREQUENCY', values.maxfreq, 1000, 20000)
    
    if ImGui.Button(ctx, 'Convert to midi', ImGui.GetWindowWidth(ctx), 40) then
      main(values)
    end
    ImGui.End(ctx)
  end
  ImGui.PopFont(ctx)
  
  if open then
    reaper.defer(gui)
  end
end
```

### Script Execution

The final part of the script initializes the GUI and sets it to run in a loop.

```lua
if not values then
  values = {onset=0.5, frame=0.5, minlength=100, minfreq=40, maxfreq=10000}
end

ImGui.Attach(ctx, font)
reaper.defer(gui)
```

## Conclusion

By integrating ReaScript with Spotify's Basic Pitch, you can convert audio files to MIDI within REAPER efficiently. This script provides a flexible interface for adjusting parameters and automates the conversion process, allowing you to focus more on creativity and less on technicalities.

Whether you're a seasoned producer or just starting, this tool can be a valuable addition to your music production arsenal. Happy converting!