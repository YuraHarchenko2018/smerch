

const BannerItem = ({ bannerInfo }) => {
    // onClick={onClick}
    return (
      <div className="banner-item">
        <div className="banner-image">
          <img decoding="async" width="50" height="50" loading="lazy" src={bannerInfo.img_src} alt={bannerInfo.title} />
        </div>
        <div className="banner-info">
          <div className="banner-title">{bannerInfo.title}</div>
          <div className="banner-description">{bannerInfo.description}</div>
        </div>
      </div>
    )
}

export default BannerItem