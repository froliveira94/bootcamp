import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import Container from '../../components/Container';
import { Loading, Owner, IssueList, Buttons } from './styles';

export default class Repository extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    repository: {},
    issues: [],
    loading: true,
    page: 1,
    issueState: 'all',
  };

  async componentDidMount() {
    await this.getIssues('all');
  }

  getIssues = async () => {
    const { match } = this.props;
    const { page, issueState } = this.state;
    const repoName = decodeURIComponent(match.params.repository);
    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: `${issueState}`,
          page,
        },
      }),
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  };

  render() {
    const { repository, issues, loading } = this.state;
    if (loading) {
      return <Loading>Carregando...</Loading>;
    }
    return (
      <Container>
        <Owner>
          <Link to="/">Voltar aos repositórios</Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>
        <Buttons>
          <button
            onClick={async () => {
              await this.setState({ issueState: 'all', page: 1 });
              await this.getIssues();
            }}
          >
            Todas
          </button>
          <button
            onClick={async () => {
              await this.setState({ issueState: 'open', page: 1 });
              await this.getIssues();
            }}
          >
            abertas
          </button>
          <button
            onClick={async () => {
              await this.setState({ issueState: 'closed', page: 1 });
              await this.getIssues();
            }}
          >
            fechadas
          </button>
        </Buttons>
        <IssueList>
          {issues.map(issue => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a href={issue.html_url}>{issue.title}</a>
                  {issue.labels.map(label => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </IssueList>
        <Buttons>
          <button
            disabled={this.state.page == 1}
            onClick={async () => {
              await this.setState({ page: this.state.page + 1 });
              await this.getIssues();
            }}
          >
            Anterior
          </button>
          <button
            onClick={async () => {
              await this.setState({ page: this.state.page + 1 });
              await this.getIssues();
            }}
          >
            Próximo
          </button>
        </Buttons>
      </Container>
    );
  }
}
