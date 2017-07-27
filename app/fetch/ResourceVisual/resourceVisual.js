/**
 * Created by Lenovo on 2017/6/29.
 */
import { get } from '../get'

export function getTreeData() {
    const result = get('http://localhost:8888/ResourceVisual/treeData');
    return result
}

export function getDashboard(center) {
    const result = get('http://localhost:8888/ResourceVisual/dashboard/' + center);
    return result
}

export function getJuniorCenter(currentCenter) {
    const result = get('http://localhost:8888/ResourceVisual/juniorCenter/' + currentCenter);
    return result
}