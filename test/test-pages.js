const request = require('supertest');
const should = require('should');

const { app, server } = require('../app');

describe('loading express', () => {
  after((done) => {
    server.close(done);
  });

  it('responds to /', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end((err, res) => {
        should.not.exist(err);
        res.text.should.equal('ok');
        done();
      });
  });

  it('404 everything else', (done) => {
    request(app)
      .get('/foo/bar')
      .expect(404)
      .end((err) => {
        should.not.exist(err);
        done();
      });
  });
});
