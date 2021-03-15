import React, { useState } from "react";

import {
  MDBBtn,
  MDBRow,
  MDBIcon,
  MDBInput,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBCol,
} from "mdbreact";
import Movie from "./Movie";
import Search from "./Search";
import "../App.css";

//movies
export let moviesList = [
  {
    title: "Tom-And-Jerry",
    description:
      "In the Tom and Jerry world, events focus on the first time a cat and mouse met, and how their relationship between friendship and hostility was forged with a long history of adventures and pranks between the duo.",
    year: 2021,
    posterUrl:
      "https://i.egycdn.com/pic/RHNhSUNlY21ZRW1UbW1qbUhSY21ZRXhtWWp2Tm1teg.jpg",
    rate: 4,
  },
  {
    title: "Monster-Hunter",
    description:
      "Artemis, who is the leader of a United Nations military team, is transferred to another area inhabited by monsters, and there she meets (the hunter), where they must close the gate to prevent the monsters from attacking the Earth.",
    year: 2020,
    posterUrl:
      "https://i.egycdn.com/pic/WmFwZndlY21ZdnZOam1qbUhjRWNtandUam1FbURUbXZj.jpg",
    rate: 3,
  },
  {
    title: "The-Mechanic",
    description:
      "(Arthur Bishop) is a professional killer, decides to put his criminal past behind his back and look to the future, but he gets involved again in the world of crime, after his archenemy kidnapped his girlfriend, Bishop travels around the world in order to carry out three very difficult assassinations in a way that appears to the public opinion on They are normal incidents, with the aim of saving his girlfriend from the hands of her kidnappers.",
    year: 2016,
    posterUrl:
      "https://i.egycdn.com/pic/WmFwZndlY212bW1tRW1ZbW1lY21wRHp4bWdhbUV4.jpg",
    rate: 5,
  },
  {
    title: "Harry-Potter",
    description:
      "The movie revolves around a fictional framework based on the novel written by the British writer (JK Rowling) (Harry Potter and the Professor’s Stone). Hogwarts) to learn witchcraft and sorcery there",
    year: 2001,
    posterUrl:
      "https://i.egycdn.com/pic/WmFwZndlY21idnRjdk5IUmN4Y05wSE5ZWWc.jpg",
    rate: 5,
  },
  {
    title: "Red",
    description:
      "In the Tom and Jerry world, events focus on the first time a cat and mouse met, and how their relationship between friendship and hostility was forged with a long history of adventures and pranks between the duo.",
    year: 2010,
    posterUrl:
      "https://i.egycdn.com/pic/WmFwZndlY21UYm1tbXBlY21ZYnZVVEVtRXZjbXY.jpg",
    rate: 2,
  },
  {
    title: "The-Golden-Compass",
    description:
      "n a fantasy atmosphere, (Lisa) is an ordinary girl who studies at Jordan University, lives a boring life, and is looking for an exciting adventure, but her life changes when she finds very fine particles in the size of dirt in front of her house that have the ability to unite the different factors, but there is unknown who gets upset with This discovery, and seeks to destroy it, so you embark on an exciting adventure full of talking animals and strange creatures.",
    year: 2007,
    posterUrl:
      "https://i.egycdn.com/pic/WmFwZndlY21UbW1qbWpFY21ibUxOdnhtWUlQ.jpg",
    rate: 4,
  },
];

export const Movies = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };

  //hooks for the movies
  const [movies, setMovies] = useState(moviesList);
  const [movie, setMovie] = useState({
    title: "",
    description: "",
    year: 0,
    posterUrl: "",
    rate: 0,
  });
  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };
  let add = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  const [search, setSearch] = useState("");
  let handleSearch = (value) => {
    setSearch(value);
  };
  return (
    <div className="movies" style={{ padding: "5rem 0", minHeight: "100vh" }}>
      <div className="container">
        <MDBRow>
          <MDBCol xl="6" lg="6" md="6" sm="11" xs="11">
            <div className="add-movie">
              <p>Search?</p>
              <Search handleSearch={handleSearch} />
            </div>
          </MDBCol>
          <MDBCol xl="6" lg="6" md="6" sm="11" xs="11">
            <div className="add-movie">
              <p>
                New Movie! &nbsp;&nbsp;
                <MDBIcon icon="plus" />
              </p>
              <MDBBtn onClick={toggle} id="btn-add">
                new movie &nbsp;&nbsp;&nbsp;
                <MDBIcon icon="film" />
              </MDBBtn>
              <MDBModal isOpen={modal} toggle={toggle}>
                <MDBModalHeader toggle={toggle}>
                  New Movie Details
                </MDBModalHeader>
                <MDBModalBody style={{ padding: "1rem 2rem" }}>
                  <MDBInput
                    label="Title"
                    style={{ width: "70%", margin: "0 auto" }}
                    size="sm"
                    material
                    containerClassName="mb-2 mt-0"
                    prepend=" title"
                    required
                    type="text"
                    name="title"
                    onChange={handleChange}
                  />
                  <MDBInput
                    label="Description"
                    style={{ width: "70%", margin: "0 auto" }}
                    size="sm"
                    material
                    containerClassName="mb-2 mt-0"
                    prepend=" Description"
                    required
                    type="text"
                    name="description"
                    onChange={handleChange}
                  />
                  <MDBInput
                    label="Year"
                    style={{ width: "70%", margin: "0 auto" }}
                    size="sm"
                    material
                    containerClassName="mb-2 mt-0"
                    prepend=" Proposal"
                    required
                    type="text"
                    name="year"
                    onChange={handleChange}
                  />
                  <MDBInput
                    label="Poster Url"
                    style={{ width: "70%", margin: "0 auto" }}
                    material
                    containerClassName="mb-2 mt-0"
                    prepend="Poster"
                    size="sm"
                    type="text"
                    name="posterUrl"
                    required
                    onChange={handleChange}
                  />
                  <MDBInput
                    label="Rate"
                    style={{ width: "70%", margin: "0 auto" }}
                    material
                    containerClassName="mb-2 mt-0"
                    prepend="Rate"
                    size="sm"
                    type="text"
                    name="rate"
                    onChange={handleChange}
                    required
                  />
                </MDBModalBody>
                <MDBModalFooter>
                  <MDBBtn color="secondary" onClick={toggle}>
                    Close
                  </MDBBtn>
                  <MDBBtn color="primary" onClick={() => add(movie)}>
                    Save changes
                  </MDBBtn>
                </MDBModalFooter>
              </MDBModal>
            </div>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          {movies
            .filter(
              (item) =>
                item.title.toLowerCase().includes(search.toLowerCase()) === true
            )
            .map((elt) => (
              <Movie movie={elt} key={elt.title}/>
            ))}
        </MDBRow>
      </div>
    </div>
  );
};
