[[toc]]

# App Components

## FOLDER: src/components contents:

### FOLDER: path/to/lib/
@startuml

  folder "FOLDER: path/to/lib/" {
    [ Component-A ] ..> [Component-Generic] : uses
  }

@enduml

---

## FOLDER: app/src/components
### TODO

::: groupme C1-TODOS
  * [ ] go park
  * [ ] wash clothes
  * [ ] add to calendar
  * [ ] bills, bills, bills
:::

---

@startuml

  folder "FOLDER: yo-app/" {
    [AppComponentMixin] <-- [Polymer.Element] : extends

    [TODO: Yo-App]
  }

@enduml

---

### RELATIONSHIPS: yo-app
@startuml

  folder "FOLDER: bl-backend/" {
    [YoAppItem]               <-- [YoAppComponentMixin] 	: extends
    [YoAppList]               <-- [YoAppComponentMixin] 	: extends
    [YoAppListPlaceholder]    <-- [Polymer.Element] 	    : extends
    [YoAppClient]             <-- [YoAppComponentMixin] 	: extends
    [YoAppImporter]           <-- [YoAppComponentMixin] 	: extends
    [YoAppListLoadMore]       <-- [Polymer.Element] 	    : extends
  }

  folder "FOLDER: yo-c1-elements/" {
    [Component-C]   <-- [Polymer.Element]
  }

@enduml


---

### YoAppClient
* TODO: describe what this component does

@startuml

package "YoAppClient" {
  node "Component: Paper-Dialog" {
    [Div.dialogIcon]
    [Div.dialogContent]
    [Div.buttons]
  }
}

skinparam node {
  backgroundColor Yellow
}

@enduml


---

### TBDComponent
* TODO: describe what this component does

@startuml
  package "TBDComponent" {
  }

@enduml

