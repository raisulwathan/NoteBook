import Input from "./input";
import style from "../styles/header.module.css";

const Header = ({ search, updateQuery }) => {
  return (
    <header className={style.container}>
      <h1 className={style.heading}>NoteBook</h1>
      <Input
        value={search}
        onChange={updateQuery}
        type='cari'
        id='cari_note'
        name='cari_note'
        placeholder='Find catatan...'
      />
    </header>
  );
};

export default Header;
