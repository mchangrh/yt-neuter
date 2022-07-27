## aggressive filters not recommended for daily use
```adguard
## homepage
! remove all live videos
youtube.com##ytd-rich-item-renderer:has(.badge-style-type-live-now-alternate)
```

## more specific filters
```adguard
## homepage
! remove shorts shelf only
youtube.com##ytd-rich-shelf-renderer:has(a.yt-simple-endpoint[title="Shorts"])
```

## misc related filters
```adguard
## block casting
||www.gstatic.com/*/cast_sender.js
```