import {Engine} from "../Engine";
import {IOperator} from "../operator/IOperator";
import {IExpression} from "../expression/IExpression";

export class CallOperator implements IExpression {
  private operator: IOperator;
  private  args: Array<any>;

  constructor(operator: IOperator, args: Array<any>) {
    this.operator = operator;
    this.args     = args;
  }

  /**
   * eval
   */
  public eval(engine: Engine): Object {
    return this.operator.call(engine, this.args);
  }
}