[<CompilationRepresentation(CompilationRepresentationFlags.ModuleSuffix)>]
module App

open Fable.Core
open Fable.Core.JsInterop
open Fable.Import.vscode

let activate(disposables: Disposable[]) =
  let activate () =
    window.showInformationMessage("hello from vscode extension written with fable-narumi")
    |> ignore
  activate()
  ()

let deactivate(disposables: Disposable[]) =
  ()