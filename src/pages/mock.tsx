export default function Mock() {
  return (
    <div className="base">
      <div className="menu">
        <h2>Name</h2>
        <div className="party-info">
          <label className="normal">
            プレイスタイル
            <input type="text" />
          </label>
          <label className="normal">
            ひとこと
            <input type="text" />
          </label>
        </div>
        <ul className="members">
          <li className="member">
            <label>
              1<input type="text" />
            </label>
          </li>
        </ul>
        <button className="search">検索</button>
      </div>
      <div className="contents">
        <div className="filter"></div>
        <div className="result">
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </div>
    </div>
  );
}
