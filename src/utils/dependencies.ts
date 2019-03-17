import { NodeDependency } from "./general";

export function getNxDependencies(nxVersion: string, angularVersion: string): Array<NodeDependency> {
  return <Array<NodeDependency>>[
    {
      name: "@nrwl/nx",
      version: nxVersion,
      type: "dependency"
    },
    {
      name: "@ngrx/effects",
      version: angularVersion,
      type: "dependency"
    },
    {
      name: "@ngrx/router-store",
      version: angularVersion,
      type: "dependency"
    },
    {
      name: "@ngrx/store",
      version: angularVersion,
      type: "dependency"
    }
  ]
}

export function getAngularDependencies(version: string): Array<NodeDependency> {
  return ["animations", "common", "compiler", "core", "forms", "platform-browser", "platform-browser-dynamic", "router"].map(p => {
    return <NodeDependency>{
      name: `@angular/${p}`,
      version,
      type: "dependency"
    }
  })
}

export function getNativescriptDependencies(angularVersion: string) {
  return <Array<NodeDependency>>[
    {
      name: "nativescript-angular",
      version: "~7.2.0",
      type: "dependency"
    },
    {
      name: "nativescript-ngx-fonticon",
      version: "^4.2.0",
      type: "dependency"
    },
    {
      name: "nativescript-theme-core",
      version: "^1.0.4",
      type: "dependency"
    },
    {
      name: "tns-core-modules",
      version: "~5.2.0",
      type: "dependency"
    },
    {
      name: "terser-webpack-plugin",
      version: "~1.2.0",
      type: "devDependency"
    },
    {
      name: "tns-platform-declarations",
      version: "~5.2.0",
      type: "devDependency"
    },
    {
      name: "rxjs",
      version: "6.3.3",
      type: "dependency"
    },
    {
      name: "zone.js",
      version: "^0.8.26",
      type: "dependency"
    },
    {
      name: "@angular/language-service",
      version: angularVersion,
      type: "devDependency"
    },
    {
      name: "codelyzer",
      version: "~4.5.0",
      type: "devDependency"
    },
    ...getAngularDependencies(angularVersion)
  ];
}