/**
 * Created by Lenovo on 2017/6/29.
 */
module.exports = {
    data:[{
        label: '司令',
        value: 'commander',
        key: 'commander',
        children: [{
            label: '军长1',
            value: 'armyCommander1',
            key: 'armyCommander1',
            children: [{
                label: '师长1',
                value: 'teacher1',
                key: 'teacher1',
                children: [{
                    label: '旅长1',
                    value: 'brigadeCommander1',
                    key: 'brigadeCommander1'
                }, {
                    label: '旅长2',
                    value: 'brigadeCommander2',
                    key: 'brigadeCommander2'
                }, {
                    label: '旅长3',
                    value: 'brigadeCommander3',
                    key: 'brigadeCommander3'
                }]
            }, {
                label: '师长2',
                value: 'teacher2',
                key: 'teacher2'
            }]
        }, {
            label: '军长2',
            value: 'armyCommander2',
            key: 'armyCommander2',
            children: [{
                label: '师长3',
                value: 'teacher2',
                key: 'teacher2'
            }, {
                label: '师长4',
                value: 'teacher4',
                key: 'teacher4'
            }]
        }],
    }, {
        label: '炸弹',
        value: 'bomb',
        key: 'bomb'
    }]
}