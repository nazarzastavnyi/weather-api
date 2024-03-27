import { Column, DataType, Table, Model } from 'sequelize-typescript';
import {
  APIResponseInterface,
  WeatherModelInterface,
} from '../interface/weather.interface';

@Table({
  tableName: 'weather',
  underscored: true,
})
export class WeatherModel extends Model implements WeatherModelInterface {
  @Column({ type: DataType.NUMBER, allowNull: false })
  lat: number;
  @Column({ type: DataType.NUMBER, allowNull: false })
  log: number;
  @Column({ type: DataType.STRING, allowNull: false })
  part: string;
  @Column({ type: DataType.JSONB })
  weather: APIResponseInterface;
}
