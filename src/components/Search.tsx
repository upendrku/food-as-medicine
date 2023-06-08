import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import geo2zip from 'geo2zip';
import Pagination from 'react-bootstrap/Pagination';

import { getCategories, getFAMResources } from '../utils/apiCalls';
import Loading from './Loading';

const mock = require('./mockRes.json');

const Search = () => {
  const [categories, setCategories] = useState([] as any);
  const [category, setCategory] = useState('' as any);
  const [zip, setZip] = useState('' as any);
  const [agencyName, setAgencyName] = useState('' as any);
  const [range, setRange] = useState(3 as any);
  const [coalitionFamResources, setCoalitionFAMResources] = useState([] as any);
  const [allExternalFamResources, setAllExternalFAMResources] = useState(
    [] as any
  );
  const [externalFamResources, setExternalFAMResources] = useState([] as any);
  const [activePage, setAcivePage] = useState(1);
  const [showLoader, setLoadingStatus] = useState(false);
  const [items, setItems] = useState([] as any);

  const setDefaultZip = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async function (a) {
        const location = {
          latitude: a.coords.latitude,
          longitude: a.coords.longitude,
        };
        const zipCode: any = await geo2zip(location, { limit: 1 });
        setZip(zipCode[0]);
      });
    }
  };

  useEffect(() => {
    setDefaultZip();

    const getAllCategories = async () => {
      const allCategories = await getCategories(); //  mock.categories;
      setCategories([...categories, ...allCategories]);
    };

    getAllCategories();
  }, []);

  useEffect(() => {
    setExternalFAMResources([
      ...allExternalFamResources?.slice((activePage - 1) * 8, activePage * 8),
    ]);
    let pages: any = [];
    for (
      let number = 1;
      number <= Math.ceil(allExternalFamResources.length / 8);
      number++
    ) {
      pages.push(
        <Pagination.Item
          key={number}
          active={number === activePage}
          onClick={() => changeActivePage(number)}
        >
          {number}
        </Pagination.Item>
      );
    }
    setItems([...pages]);
  }, [activePage]);

  const redirectTo = (resourceLink: string) => {
    window.open(resourceLink, '_blank');
  };

  const setSelectedCategory = (key: any, event: any) => {
    setCategory(event.target.innerText);
  };

  const setSelectedZip = (event: any) => {
    setZip(event.target.value);
  };

  const setSelectedAgencyName = (event: any) => {
    setAgencyName(event.target.value);
  };

  const setSelectedRange = (event: any) => {
    setRange(event.target.value);
  };

  const changeActivePage = (number: number) => {
    setAcivePage(number);
  };

  const searchNow = async () => {
    // setCoalitionFAMResources([...[]]);
    // setAllExternalFAMResources([...[]]);
    // setExternalFAMResources([...[]]);
    setLoadingStatus(true);
    const famResources = await getFAMResources({
      category,
      zip,
      agencyName,
      range,
    });
    // setFAMResources(famResources);
    setCoalitionFAMResources([...famResources?.coalition]);
    setAllExternalFAMResources([...famResources?.external]);
    setExternalFAMResources([
      ...famResources?.external?.slice((activePage - 1) * 8, activePage * 8),
    ]);
    setAcivePage(1);
    let pages: any = [];
    for (
      let number = 1;
      number <= Math.ceil(famResources?.external?.length / 8);
      number++
    ) {
      pages.push(
        <Pagination.Item
          key={number}
          active={number === activePage}
          onClick={() => changeActivePage(number)}
        >
          {number}
        </Pagination.Item>
      );
    }
    setItems([...pages]);
    setLoadingStatus(false);
  };

  return (
    <>
      <div className="content">
        <Container className="search-container">
          <h1 className="text-center mt-5">Search Vendors</h1>
          <div className="p-4">
            <div className="search-filters">
              Please choose from below filters:
            </div>
            <div className="filters-section">
              <Dropdown className="pe-5" onSelect={setSelectedCategory}>
                <Dropdown.Toggle
                  className="category-dropdown"
                  id="dropdown-button"
                  variant="primary"
                  size="lg"
                >
                  {category !== '' ? category : 'Select Category'}
                </Dropdown.Toggle>

                <Dropdown.Menu variant="light">
                  {categories?.length > 0 &&
                    categories.sort().map((category: string) => {
                      return (
                        <Dropdown.Item key={category} value={category}>
                          {category}
                        </Dropdown.Item>
                      );
                    })}
                </Dropdown.Menu>
              </Dropdown>
              <Form.Floating className="pe-5">
                <Form.Control
                  id="floatingInputAgency"
                  type="Agency Name"
                  placeholder="Agency Name"
                  onChange={setSelectedAgencyName}
                  value={agencyName}
                  className="agency-field"
                />
                <label htmlFor="floatingInputAgency">Agency Name</label>
              </Form.Floating>
              <Form.Floating className="pe-5">
                <Form.Control
                  id="floatingInputZip"
                  type="Zip Code"
                  placeholder="Zip Code"
                  onChange={setSelectedZip}
                  value={zip}
                />
                <label htmlFor="floatingInputZip">Zip Code</label>
              </Form.Floating>
              <div>
                <label htmlFor="customRange3" className="form-label">
                  Distance ({range} miles)
                </label>
                <input
                  type="range"
                  className="form-range"
                  min="1"
                  max="20"
                  step="1"
                  id="customRange3"
                  onChange={setSelectedRange}
                  value={range}
                ></input>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              variant="dark"
              className="rounded-pill login-btn search-location"
              onClick={searchNow}
              disabled={category === ''}
            >
              Search Now
            </Button>
          </div>
          <div className="mt-5 resource">
            {showLoader ? (
              <Loading />
            ) : (
              <>
                {coalitionFamResources?.length > 0 && (
                  <div>
                    <h3 className="text-center">BNMC Resources</h3>
                    <hr />
                    <div className="resource-cards-section d-flex">
                      {coalitionFamResources?.map(
                        (resource: any, index: number) => {
                          return (
                            <div className="card-container" key={index}>
                              <div className="card resource-card card-01">
                                <img
                                  className="card-img-top"
                                  src="https://foodtank.com/wp-content/uploads/2017/11/ft-food-as-medicine-e1511806439818-770x462.jpg"
                                  alt="Card image cap"
                                />
                                <div className="card-body d-flex flex-column">
                                  <h4 className="card-title">
                                    {resource.name}
                                  </h4>
                                  {/* <p className="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p> */}
                                  <ListGroup className="list-group-flush">
                                    <ListGroup.Item>
                                      Contact: {resource.contact}
                                    </ListGroup.Item>
                                    {resource.tele && resource.tele !== '' && (
                                      <ListGroup.Item>
                                        Tel.: {resource.tele}
                                      </ListGroup.Item>
                                    )}
                                    {resource.email &&
                                      resource.email !== '' && (
                                        <ListGroup.Item>
                                          Email: {resource.email}
                                        </ListGroup.Item>
                                      )}
                                  </ListGroup>
                                  {resource.website && (
                                    <div className="mt-auto text-center mb-3 mt-3">
                                      <Button
                                        className="btn-primary rounded-pill explore-btn"
                                        onClick={() =>
                                          redirectTo(resource.website)
                                        }
                                      >
                                        Explore
                                      </Button>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                )}
                {externalFamResources?.length > 0 && (
                  <div>
                    <h3 className="text-center">External Resources</h3>
                    <hr />
                    <div className="resource-cards-section d-flex">
                      {externalFamResources?.map(
                        (resource: any, index: number) => {
                          return (
                            <div className="card-container" key={index}>
                              <div className="card resource-card card-01">
                                <img
                                  className="card-img-top"
                                  src="https://a16z.com/wp-content/uploads/2020/11/Food-as-Medicine.jpg"
                                  alt="Card image cap"
                                />
                                <div className="card-body d-flex flex-column">
                                  <h4 className="card-title">
                                    {resource.name}
                                  </h4>
                                  <ListGroup className="list-group-flush">
                                    <ListGroup.Item>
                                      Address: {resource.address}
                                    </ListGroup.Item>
                                    {resource.tele && resource.tele !== '' && (
                                      <ListGroup.Item>
                                        Tel.: {resource.tele}
                                      </ListGroup.Item>
                                    )}
                                    {resource.email && (
                                      <ListGroup.Item>
                                        Email: {resource.email}
                                      </ListGroup.Item>
                                    )}
                                  </ListGroup>
                                  {resource.website && (
                                    <div className="mt-auto text-center mb-3 mt-3">
                                      <Button
                                        className="btn-primary rounded-pill explore-btn"
                                        onClick={() =>
                                          redirectTo(resource.website)
                                        }
                                      >
                                        Explore
                                      </Button>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        }
                      )}
                      <div className="fam_pagination">
                        <Pagination>{items}</Pagination>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Search;
