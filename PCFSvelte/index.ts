import {IInputs, IOutputs} from "./generated/ManifestTypes";

export class PCFSvelte implements ComponentFramework.StandardControl<IInputs, IOutputs> {

	private _container: HTMLDivElement;
	private _htmlElement: HTMLElement;
	private _context: ComponentFramework.Context<IInputs>;
	private _notifyOutputChanged: () => void;

	constructor() {}

	public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container:HTMLDivElement)
	{
		this._context = context;
		this._container = container;
		this._notifyOutputChanged = notifyOutputChanged;

		this._htmlElement = document.createElement("app-pcf-component");
		this._htmlElement.setAttribute('test', 'Params from PCF');

		container.appendChild(this._htmlElement);	

		//need to load svelte js after html element created
		require('../hello-svelte/public/build/bundle.js');
	}

	public updateView(context: ComponentFramework.Context<IInputs>): void
	{

	}

	public getOutputs(): IOutputs
	{
		return {};
	}

	public destroy(): void
	{

	}
}