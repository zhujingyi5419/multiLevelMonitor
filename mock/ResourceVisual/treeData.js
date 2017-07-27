/**
 * Created by Lenovo on 2017/6/29.
 */
module.exports = {
    data: [{
        label: '司令',
        key: 'commander',
        value: 'commander',
        children: [{
            label: '军长1',
            key: 'armyC1',
            value: 'armyC1',
            children: [{
                label: '师长1',
                key: 'teacher1',
                value: 'teacher1',
                children: [{
                    label: '旅长1',
                    key: 'brigadeC1',
                    value: 'brigadeC1'
                }, {
                    label: '旅长2',
                    key: 'brigadeC2',
                    value: 'brigadeC2',
                }, {
                    label: '旅长3',
                    key: 'brigadeC3',
                    value: 'brigadeC3'
                }]
            }, {
                label: '师长2',
                key: 'teacher2',
                value: 'teacher2'
            }]
        },
            {
                label: '军长2',
                key: 'armyC2',
                value: 'armyC2',
                children: [{
                    label: '师长3',
                    key: 'teacher3',
                    value: 'teacher3'
                },{
                    label: '师长4',
                    key: 'teacher4',
                    value: 'teacher4'
                }]
            }],
    }, {
        label: '炸弹',
        key: 'bomb',
        value: 'bomb'
    }]
}