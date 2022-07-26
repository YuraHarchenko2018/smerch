import './HeaderSearch.css'

const HeaderSearch = () => {
    return (
        <div className='header-search-wrapper'>
          <input placeholder='Пошук' className='header-search-input' />
          <button className='header-search-button button'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
              <path fill="#fff" fillRule="evenodd" d="M14.177 7.176A6.588 6.588 0 101 7.176a6.588 6.588 0 0013.177 0zm-11.942 0a5.353 5.353 0 1110.706 0 5.353 5.353 0 01-10.706 0z" clipRule="evenodd"></path>
              <path fill="#fff" d="M11.156 11.517a.618.618 0 01.805-.053l.069.06 2.587 2.631a.618.618 0 01-.812.927l-.07-.06-2.586-2.632a.618.618 0 01.007-.873z"></path>
            </svg>
          </button>
        </div>
    )
}

export default HeaderSearch