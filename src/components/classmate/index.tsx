import React, { FunctionComponent, useEffect, useState } from "react"

import {range, find, includes, map} from "ramda";

import ClassmateTable from './table'

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
  [range(6, 9), "sports or clubs"],
  [range(9, 13), "socializing"],
]

const npc = (modifier: number = 0) => `A ${rollOnTable(relationshipTable, modifier)} who is ${rollOnTable(skillTable, modifier)} at ${rollOnTable(focusTable, modifier)}`

const CLASSROOM_ROWS = 4
const CLASSROOM_COLS = 4

const ClassmateGeneratorClient: FunctionComponent = () => {
  const [classmateData, setClassmateData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const raw = await fetch(`https://uinames.com/api/?amount=${CLASSROOM_COLS * CLASSROOM_ROWS}`)
      const data: object[] = await raw.json()
      const classmates = map(nameData => ({
        name: `${nameData['name']} ${nameData['surname']}`,
        desc: npc()
      }), data)
      setClassmateData(classmates)
    }
    fetchData().catch(e => window.alert(e.message))
  }, [])

  return (
    <div>
      <ClassmateTable width={CLASSROOM_COLS} classmates={classmateData} />
    </div>
  )
}

export default ClassmateGeneratorClient