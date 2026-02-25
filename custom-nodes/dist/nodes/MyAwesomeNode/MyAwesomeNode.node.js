"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyAwesomeNode = void 0;
class MyAwesomeNode {
    constructor() {
        this.description = {
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
                {
                    displayName: 'Громкость',
                    name: 'volume',
                    type: 'number',
                    default: 1,
                    description: 'Сколько раз повторить',
                },
                {
                    displayName: 'Верхний регистр',
                    name: 'uppercase',
                    type: 'boolean',
                    default: false,
                    description: 'Преобразовать в верхний регистр',
                }
            ],
        };
    }
    async execute() {
        const items = this.getInputData();
        const returnData = [];
        for (let i = 0; i < items.length; i++) {
            const greeting = this.getNodeParameter('greeting', i, 'Привет, n8n!');
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
exports.MyAwesomeNode = MyAwesomeNode;
//# sourceMappingURL=MyAwesomeNode.node.js.map