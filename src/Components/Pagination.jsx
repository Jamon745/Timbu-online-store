import _ from 'lodash'
const pagination = (props) => {
      const {itemCount, pageSize, onPageChange, currentPage} = props;

       // Calculate the total number of pages
      const pagesCount = Math.ceil(itemCount / pageSize);
      if (pagesCount === 1) return null;

       // Generate an array of page numbers from 1 to pagesCount
    const pages =  _.range(1,pageSize + 1)
      return (
            <nav>
                  <ul className="pagination">
                        {pages.map(page => (
                        <li key={page} className={page === currentPage ? 'page-item active' : 'page-item'}>
                              <a onClick={() => onPageChange(page)}
                               className="page-link">{page}</a></li>
                        ))}
                  </ul>
            </nav>
      )
}
export default pagination;