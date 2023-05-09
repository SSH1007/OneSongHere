import SearchBar from 'components/molecules/searchsection/SearchBar';
import Button from 'components/atoms/buttons/Button';
import TextButton from 'components/atoms/buttons/TextButton';
import ArticleBoard from 'components/organisms/board/ArticleBoard';
import { useNavigate } from 'react-router-dom';
import './Board.scss';

const Board = () => {
  const navigate = useNavigate();
  const navigateWritePage = () => {
    navigate('/board/write');
  };

  return (
    <div>
      <div className="category__container">
        {/* onclick으로 카테고리에 맞게 아티클들 필터링할 수 있게 해줘야 함 */}
        <TextButton label="구인" />
        <TextButton label="질문" />
        <TextButton label="홍보" />
        <TextButton label="잡담" />
      </div>
      <div className="board__container">
        <div>커뮤니티 전체 페이지</div>
        <div>입니다</div>
        <SearchBar />
        <Button
          label="글쓰기"
          type="submit"
          color="primary"
          onClick={navigateWritePage}
        />
        <ArticleBoard />
      </div>
    </div>
  );
};

export default Board;
