import {Engine} from "../Engine";
import {IOperator} from "../operator/IOperator";

export class IfOperator implements IOperator {
  /**
   * call
   */
  public call(engine: Engine, args: Array<any>): Object {
    var ret: Object = null;

    if (<boolean>engine.eval(args[0])) {
      ret = engine.eval(args[1]);
    } else {
      ret = engine.eval(args[2]);
    }

    return ret;
  }
}
