import type { components } from "@/types/stapi";
import { Component } from "react";
import styles from "./Card.module.scss";

type CharacterProps = Pick<
  components["schemas"]["CharacterFull"],
  | "name"
  | "hologramActivationDate"
  | "hologram"
  | "hologramStatus"
  | "gender"
  | "yearOfBirth"
  | "monthOfBirth"
  | "dayOfBirth"
  | "placeOfDeath"
  | "height"
  | "weight"
>;

export class Card extends Component<CharacterProps> {
  render() {
    console.log(this.props);

    const {
      name,
      hologramActivationDate,
      hologram,
      hologramStatus,
      gender,
      yearOfBirth,
      monthOfBirth,
      dayOfBirth,
      placeOfDeath,
      height,
      weight,
    } = this.props;
    return (
      <div className={styles["card"]}>
        <h2 className={styles["name"]}>Character name {name}</h2>
        <ul className={styles["list"]}>
          <li>Gender {gender ?? "Unknown"}</li>
          <li>Year the character was born {yearOfBirth ?? "Unknown"}</li>
          <li> Month the character was born {monthOfBirth ?? "Unknown"}</li>
          <li>Day the character was born {dayOfBirth ?? "Unknown"}</li>
          <li>Place of birth {placeOfDeath ?? "Unknown"}</li>
          <li>Height in centimeters {height ?? "Unknown"}</li>
          <li>Weight in kilograms {weight ?? "Unknown"}</li>
          <li>Hologram activation date {hologramActivationDate}</li>
          <li>Hologram status {hologramStatus}</li>
          <li>Whether this character is a hologram {hologram}</li>
        </ul>
      </div>
    );
  }
}
