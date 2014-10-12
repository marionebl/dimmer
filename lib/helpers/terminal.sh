#!/usr/bin/env bash
theme=$1

#!/bin/bash
osascript <<EOD
tell application "Terminal"
  repeat with w from 1 to count windows
    repeat with t from 1 to count tabs of window w
      set current settings of tab t of window w to (first settings set whose name is "${theme}")
    end repeat
  end repeat
end tell
EOD
