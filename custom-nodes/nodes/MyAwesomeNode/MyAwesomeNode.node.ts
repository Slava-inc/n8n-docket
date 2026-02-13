import {
	IExecuteFunctions,
	INodeType,
	INodeTypeDescription,
	INodeExecutionData,
} from 'n8n-workflow';

export class MyAwesomeNode implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'My Awesome Node',
		name: 'myAwesomeNode',
		group: ['transform'],
		version: 1,
		description: 'Моя первая кастомная нода',
		defaults: {
			name: 'My Awesome Node',
		},
		inputs: ['main'],
		outputs: ['main'],
		properties: [
			{
				displayName: 'Приветствие',
				name: 'greeting',
				type: 'string',
				default: 'Привет, n8n!',
				description: 'Текст который будет выведен',
			},
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];

		for (let i = 0; i < items.length; i++) {
			const greeting = this.getNodeParameter('greeting', i, 'Привет, n8n!') as string;
			
			returnData.push({
				json: {
					result: `${greeting} ✅ обработано!`,
					timestamp: new Date().toISOString(),
				},
			});
		}

		return [returnData];
	}
}