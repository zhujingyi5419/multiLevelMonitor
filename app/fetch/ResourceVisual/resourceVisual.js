/**
 * Created by Lenovo on 2017/6/29.
 */
import { get } from '../get'

export function getTreeData() {
    const result = get('http://localhost:8888/ResourceVisual/treeData');
    return result
}

export function getDashboard() {
    const result = get('http://localhost:8888/ResourceVisual/dashboard');
    return result
}

export function getJuniorCenter() {
    const result = get('http://localhost:8888/ResourceVisual/juniorCenter');
    return result
}