import React, { useContext, useEffect, useState } from 'react';

import ReactPaginate from 'react-paginate';
import { AppContext } from '../../AppContext';
import CardProductPage from '../cardProduct_page/CardProduct_page';
const NumberPage = () => {
    const itemsPerPage=9;
    const { product } = useContext(AppContext)
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Đang tải các mục từ ${itemOffset} đến ${endOffset}`);
    const currentItems = (product != null && product.slice(itemOffset, endOffset));
    const pageCount = Math.ceil((product != null &&product.length) / itemsPerPage);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % product.length;
        console.log(
          `Người dùng yêu cầu trang số ${event.selected}, đó là phần bù ${newOffset}`
        );
        setItemOffset(newOffset);
      };
    return (
        <div>
            {product != null && product.map((item, index) => (
                                <CardProductPage ite={item} key={index} currentItems={currentItems} />
                            ))}
            


            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                containerClassName='pagination'
                pageClassName='page-item'
                pageLinkClassName='page-link'
                previousClassName='page-item '
                previousLinkClassName='page-link'
                nextClassName='page-item'
                nextLinkClassName='page-link'
            />

        </div>
    );
}

export default NumberPage;
