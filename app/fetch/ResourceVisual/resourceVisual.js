/**
 * Created by Lenovo on 2017/6/29.
 */
import { get } from '../get'

export function getTreeData() {
    const result = get('http://localhost:8888/ResourceVisual/treeData');
    return result
}