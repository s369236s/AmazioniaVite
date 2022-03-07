import { Point2D } from "../utils/Point2D";

export interface Entity {
  pos: Point2D;
  imageURL: string;
  render(ctx: CanvasRenderingContext2D): void;
}
