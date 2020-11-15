import React from 'react'
import NewsHeading from '../components/heading/NewsHeading'
import Pagination from 'react-bootstrap/Pagination'
import Cards from '../components/newsCards/Cards'
import Footer from '../components/footer/Footer'

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

const paginationBasic = (
  <div>
    <Pagination>{Cards}</Pagination>
    <br />

    <Pagination size="lg">{items}</Pagination>
    <br />

    <Pagination size="sm">{items}</Pagination>
  </div>
);

// render(paginationBasic);

export default function News() {
    return (
        <div className="">
            < NewsHeading />

            <Pagination className="my-5">
                <Pagination.Item active key={1}>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item>{4}</Pagination.Item>
            </Pagination>

            {/* <Pagination>{Cards}</Pagination> */}

            < Cards>{1}</ Cards>

            <Pagination className="my-5">
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item >{3}</Pagination.Item>
                <Pagination.Item>{4}</Pagination.Item>
            </Pagination>

            < Footer />
        </div>
    )
}
