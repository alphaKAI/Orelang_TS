import {Engine} from "../Engine";
import {IOperator, Operator} from "../operator/IOperator";

export class GetOperator extends Operator implements IOperator {
  /**
   * call
   */
  public call(engine: Engine, args: Array<any>): Object {
    return engine.getVariable(<string>args[0]);
  }
}
