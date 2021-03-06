import {css} from '@emotion/core';
import Img from 'gatsby-image';
import {head, split} from 'ramda';
import {useMemo} from 'react';
import Text from '../Text';
import asCard from './asCard';
import {classNames} from '~/utilities';
import {GRAY_COLOR} from '~/constants';

const styles = css`
  flex-direction: row;
  align-items: center;
  padding: 1.5rem;
  text-align: left;

  .text {
    display: flex;
    flex: 1;
  }

  h3 {
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 300;
  }

  h4 {
    font-size: 0.8125rem;
    font-weight: 300;
    line-height: 1.25rem;
    color: ${GRAY_COLOR};
  }

  .avatar > * {
    flex-shrink: 0;
    border: 1px solid #e9e9e9;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 1.5rem;
  }
`;

export default asCard(
  ({ConditionalAnchor, avatar, title, country, city, date, className}) => {
    const formattedDate = useMemo(() => head(split(', ', date)), [date]);

    return (
      <ConditionalAnchor
        css={styles}
        className={classNames(className, 'event three-dee actionable rounded')}
      >
        {avatar && (
          <div className='avatar'>
            <Img {...avatar} />
          </div>
        )}
        <div>
          <Text h3 children={title} />
          <Text h4 children={formattedDate} />
          <Text h4 children={`${city}, ${country}`} />
        </div>
      </ConditionalAnchor>
    );
  },
);
