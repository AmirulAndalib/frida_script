//@ts-nocheck
import {log} from "../utils/log";

export function all_so(system: boolean = false) {
    {
        Process.enumerateModules({
            onMatch: function (module) {

                if (system) {
                    log('Module name: ' + module.name + " - " + "Base Address: " + module.base.toString() + " - " + "path: " + module.path);
                } else {
                    if (!module.path.includes('/system'))
                        log('Module name: ' + module.name + " - " + "Base Address: " + module.base.toString() + " - " + "path: " + module.path);
                }
            },
            onComplete: function () {
            }
        });
    }
}