import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useEffect, useState } from "react";
import { Card, ListGroup, ListGroupItem,Row,Col } from "react-bootstrap";

import api from "../api/api";
const API = api.create();
export default function Home() {
  const [movie, movieList] = useState(null);
  useEffect(() => {
    GET_MOVIES_RANDOM();
  }, []);

  const GET_MOVIES_RANDOM = () => {
    API.GET_MOVIES_RANDOM()
      .then(async (res) => {
        await movieList(res.data.results);
      })
      .catch((e) => console.log(e));
  };
  return (
    <div>
      <Head>
        <title>STOU-DEV</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 style={{ textAlign: "center" }}>STOU-DEV</h1>
      </div>

      {movie ? (
        <Row xs={1} md={4} className="g-4">
          {movie.map((v, k) => {
            return (
              <Col>
                <Card>
                  <Card.Img
                    variant="top"
                    src={"https://image.tmdb.org/t/p/w500/" + v.poster_path}
                  />
                  <Card.Body>
                    <Card.Title>{v.original_title}</Card.Title>
                    <Card.Text>
                      <p>{v.overview}</p>
                    </Card.Text>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem>{v.release_date}</ListGroupItem>
                      <ListGroupItem>{v.vote_average}</ListGroupItem>
                      <ListGroupItem>{v.vote_count}</ListGroupItem>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      ) : null}
    </div>
  );
}
