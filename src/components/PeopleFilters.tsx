import { useSearchParams } from 'react-router-dom';
import { SearchLink } from './SearchLink';

export const PeopleFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCenturies = searchParams.getAll('centuries');

  const getNewCenturies = (centuryToToggle: string) => {
    const isAlreadySelected = currentCenturies.includes(centuryToToggle);

    if (isAlreadySelected) {
      return currentCenturies.filter(century => century !== centuryToToggle);
    } else {
      return [...currentCenturies, centuryToToggle];
    }
  };

  return (
    <nav className="panel">
      <p className="panel-heading">Filters</p>

      <p className="panel-tabs" data-cy="SexFilter">
        <a className="is-active" href="#/people">
          All
        </a>
        <a className="" href="#/people?sex=m">
          Male
        </a>
        <a className="" href="#/people?sex=f">
          Female
        </a>
      </p>

      <div className="panel-block">
        <p className="control has-icons-left">
          <input
            data-cy="NameFilter"
            type="search"
            className="input"
            placeholder="Search"
            value={searchParams.get('query') || ''}
            onChange={event => {
              if (event.target.value) {
                searchParams.set('query', event.target.value);
              } else {
                searchParams.delete('query');
              }

              setSearchParams(searchParams);
            }}
          />

          <span className="icon is-left">
            <i className="fas fa-search" aria-hidden="true" />
          </span>
        </p>
      </div>

      <div className="panel-block">
        <div className="level is-flex-grow-1 is-mobile" data-cy="CenturyFilter">
          <div className="level-left">
            <SearchLink
              params={{ centuries: getNewCenturies('16') }}
              data-cy="century"
              className={`button mr-1 ${currentCenturies.includes('16') ? 'is-info' : ''}`}
            >
              16
            </SearchLink>

            <SearchLink
              params={{ centuries: getNewCenturies('17') }}
              data-cy="century"
              className={`button mr-1 ${currentCenturies.includes('17') ? 'is-info' : ''}`}
            >
              17
            </SearchLink>

            <SearchLink
              params={{ centuries: getNewCenturies('18') }}
              data-cy="century"
              className={`button mr-1 ${currentCenturies.includes('18') ? 'is-info' : ''}`}
            >
              18
            </SearchLink>

            <SearchLink
              params={{ centuries: getNewCenturies('19') }}
              data-cy="century"
              className={`button mr-1 ${currentCenturies.includes('19') ? 'is-info' : ''}`}
            >
              19
            </SearchLink>

            <SearchLink
              params={{ centuries: getNewCenturies('20') }}
              data-cy="century"
              className={`button mr-1 ${currentCenturies.includes('20') ? 'is-info' : ''}`}
            >
              20
            </SearchLink>
          </div>

          <div className="level-right ml-4">
            <a
              data-cy="centuryALL"
              className="button is-success is-outlined"
              href="#/people"
            >
              All
            </a>
          </div>
        </div>
      </div>

      <div className="panel-block">
        <a className="button is-link is-outlined is-fullwidth" href="#/people">
          Reset all filters
        </a>
      </div>
    </nav>
  );
};
