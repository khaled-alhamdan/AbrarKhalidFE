import React, { useState } from "react";
import { observer } from "mobx-react";
import universityStore from "../Stores/universityStore";
// Importing search bar
import SearchBar from "./SearchBar";
// Importing product item
import UniItem from "./UniItem";
// Importing add product button
import AddButton from "./AddButton";
// Importing Styles
import {
  UniversityInfoConatinerDiv,
  UniversityInfoWrapperDiv,
} from "../styles";

const UniList = () => {
  const [search, setSearch] = useState("");

  const unisList = universityStore.universities
    .filter((university) =>
      university.name.toLowerCase().includes(search.toLowerCase())
    )
    .map((university) => (
      <UniItem university={university} key={university.id} />
    ));

  return (
    <div>
      <SearchBar setSearch={setSearch} />
      <UniversityInfoConatinerDiv>
        <UniversityInfoWrapperDiv>{unisList}</UniversityInfoWrapperDiv>
      </UniversityInfoConatinerDiv>
      <AddButton />
    </div>
  );
};

export default observer(UniList);
