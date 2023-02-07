
<Card
            bg={"success"}
            key={"1"}
            text={'dark'}
            style={{ width: '18rem' }}
            className="mb-2"
            >
            <Card.Header>{data && data.temp}<sup>o</sup></Card.Header>
            <Card.Body>
              <Card.Title>{data.cityArray}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>