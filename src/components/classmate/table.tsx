import React, { FunctionComponent } from "react"

import { map, splitEvery } from "ramda"

import Card from "react-bootstrap/Card"
import CardDeck from "react-bootstrap/CardDeck"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

type Classmate = {
  name: string
  desc: string
}

type ClassmateTableProps = {
  classmates: Classmate[]
  width: number
}

const ClassmateTable: FunctionComponent<ClassmateTableProps> = ({
  classmates,
  width,
}) => {
  const rows = splitEvery(width, classmates)
  return (
    <Container>
      {map(
        row => (
          <Row>
            <Col>
              <CardDeck>
                {map(
                  classmate => (
                    <Card>
                      <Card.Body>
                        <Card.Title>{classmate.name}</Card.Title>
                        <Card.Text>{classmate.desc}</Card.Text>
                      </Card.Body>
                    </Card>
                  ),
                  row
                )}
              </CardDeck>
            </Col>
          </Row>
        ),
        rows
      )}
    </Container>
  )
}

export default ClassmateTable
