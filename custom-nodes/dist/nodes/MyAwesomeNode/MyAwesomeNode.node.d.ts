import { IExecuteFunctions, INodeType, INodeTypeDescription, INodeExecutionData } from 'n8n-workflow';
export declare class MyAwesomeNode implements INodeType {
    description: INodeTypeDescription;
    execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]>;
}
