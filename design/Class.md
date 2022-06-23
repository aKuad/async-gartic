# Class

## On config page

```mermaid
classDiagram
  class main {
  }

  class Connector {
    string url_post
    string url_ses

    constructor(string url_post, string url_ses)
    post(blob data) void
    exit() void
  }

  class DelayedButton {
    HTMLElement btn
    Function call
    string value

    constructor(HTMLElement btn, Function call)
  }

  main --* Connector
  main --* DelayedButton
```

## On edit page

```mermaid
classDiagram
  class main {
  }

  class Connector {
    [Same as "On config page"]
  }

  class DelayedButton {
    [Same as "On config page"]
  }

  class DrawEditor {
    HTMLElement ele

    constructor(HTMLElement ele)
    editEnable(bool) void
  }

  main --* Connector
  main --* DelayedButton
  main --* DrawEditor
```
