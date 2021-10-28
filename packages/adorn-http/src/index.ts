/*
 * @Author: sam.li
 * @Date: 2021-10-13 14:06:23
 * @LastEditors: sam.li
 * @LastEditTime: 2021-10-15 10:39:22
 */
import Wxios from './Wxios'
import defaults from './defaults'
import utils from './utils'
interface defaultConfig {

}
function createInstance(defaultConfig: defaultConfig): Wxios {
    var context:Wxios = new Wxios(defaultConfig);
    var instance = utils.bind(Wxios.prototype.request, context);
    utils.extend(instance, Wxios.prototype, context);
    utils.extend(instance, context);
    return instance;
}
let wxios:Wxios = createInstance(defaults);

wxios.Wxios = Wxios;

wxios.create = function create(instanceConfig) {
    return createInstance(Object.assign({}, defaults, instanceConfig || {}));
};

wxios.all = function all(promises) {
    return Promise.all(promises);
};

export default wxios;