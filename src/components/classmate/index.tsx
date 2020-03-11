import React, { FunctionComponent } from "react"

import {range, find, includes} from "ramda";

// Roll a die at random
const oneDie = (size: number) => Math.floor(Math.random() * size + 1);

// Roll 2d6
const roll2d6 = (modifier: number = 0) => oneDie(6) + oneDie(6) + modifier;

const rollOnTable = (table: any[], modifier: number = 0): string => {
  const roll = roll2d6(modifier)
  const result = find(row => includes(roll, row[0]), table)
  return result ? result[1] : roll
}

const relationshipTable = [
  [range(2, 6), "crush"],
  [range(6, 9), "friend"],
  [range(9, 13), "rival"],
]

const skillTable = [
  [range(2, 6), "worse"],
  [range(6, 9), "as good"],
  [range(9, 13), "better"],
]

const focusTable = [
  [range(2, 6), "scholastics"],
  [range(6, 9), "sports or extracurriculars"],
  [range(9, 13), "socializing"],
]

const npc = (modifier: number = 0) => <span>
  This NPC is a{' '}
  <strong>{rollOnTable(relationshipTable, modifier)}</strong>{' '}
  who is{' '}
  <strong>{rollOnTable(skillTable, modifier)}</strong>{' '}
  at{' '}
  <strong>{rollOnTable(focusTable, modifier)}</strong>{' '}
</span>

const ClassmateGeneratorClient: FunctionComponent = () => {
  return (
    <div>
      <p>{npc(0)}</p>
    </div>
  )
}

export default ClassmateGeneratorClient