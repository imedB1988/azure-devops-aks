import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '8e9'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'c15'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'feb'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'fff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '2d7'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '9ad'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'f36'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '471'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '4ee'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '622'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '14d'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '92e'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'bf2'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '727'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '233'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '77c'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '254'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '584'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '219'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '17a'),
    routes: [
      {
        path: '/docs/Application Architecture/Overview',
        component: ComponentCreator('/docs/Application Architecture/Overview', '8a2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Backup/Backup Developer workstation with Veeam',
        component: ComponentCreator('/docs/Backup/Backup Developer workstation with Veeam', '664'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Backup/Backup kubernetes namespace with Kasten10 by Veeam',
        component: ComponentCreator('/docs/Backup/Backup kubernetes namespace with Kasten10 by Veeam', '431'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Backup/Installatation of Kasten10 by Veaam',
        component: ComponentCreator('/docs/Backup/Installatation of Kasten10 by Veaam', '04f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Backup/Introduction',
        component: ComponentCreator('/docs/Backup/Introduction', 'f0f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/application-architecture',
        component: ComponentCreator('/docs/category/application-architecture', '882'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/backup',
        component: ComponentCreator('/docs/category/backup', 'bb2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/configuration-management',
        component: ComponentCreator('/docs/category/configuration-management', 'b53'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/disaster-recovery',
        component: ComponentCreator('/docs/category/disaster-recovery', 'f2b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/dockerizing-',
        component: ComponentCreator('/docs/category/dockerizing-', '055'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/getting-started',
        component: ComponentCreator('/docs/category/getting-started', '01f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/monitoring',
        component: ComponentCreator('/docs/category/monitoring', 'f80'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/multi-tenancy',
        component: ComponentCreator('/docs/category/multi-tenancy', '23f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/secrets',
        component: ComponentCreator('/docs/category/secrets', '2f1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/single-sign-on-with-keycloak',
        component: ComponentCreator('/docs/category/single-sign-on-with-keycloak', '4e4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/tutorial---basics',
        component: ComponentCreator('/docs/category/tutorial---basics', 'd44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/tutorial---extras',
        component: ComponentCreator('/docs/category/tutorial---extras', 'f09'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Configuration Management/Ansible',
        component: ComponentCreator('/docs/Configuration Management/Ansible', 'f41'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Configuration Management/Configuring AWX',
        component: ComponentCreator('/docs/Configuration Management/Configuring AWX', 'cc3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Configuration Management/Installing AWX',
        component: ComponentCreator('/docs/Configuration Management/Installing AWX', '8f1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Configuration Management/Introduction',
        component: ComponentCreator('/docs/Configuration Management/Introduction', '22b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Configuration Management/Serverspec',
        component: ComponentCreator('/docs/Configuration Management/Serverspec', '43e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Developer Access/Access AWX',
        component: ComponentCreator('/docs/Developer Access/Access AWX', '0c3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Developer Access/Access GCP instance',
        component: ComponentCreator('/docs/Developer Access/Access GCP instance', 'c0c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Disaster Recovery/CommingSoon',
        component: ComponentCreator('/docs/Disaster Recovery/CommingSoon', '17d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Dockerizing/docker compose',
        component: ComponentCreator('/docs/Dockerizing/docker compose', '6e9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Dockerizing/dockerizing the 3-tier app',
        component: ComponentCreator('/docs/Dockerizing/dockerizing the 3-tier app', 'e31'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Getting Started/Requirements',
        component: ComponentCreator('/docs/Getting Started/Requirements', 'def'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Monitoring/Configuration of Grafana Dashboards',
        component: ComponentCreator('/docs/Monitoring/Configuration of Grafana Dashboards', '541'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Monitoring/ExposeMetrics',
        component: ComponentCreator('/docs/Monitoring/ExposeMetrics', '190'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Monitoring/Installation of Grafana',
        component: ComponentCreator('/docs/Monitoring/Installation of Grafana', '3a3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Monitoring/Installation of Prometheus',
        component: ComponentCreator('/docs/Monitoring/Installation of Prometheus', '88a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Monitoring/Overview',
        component: ComponentCreator('/docs/Monitoring/Overview', '86b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Multi-Tenancy/Configure & Install Capsule',
        component: ComponentCreator('/docs/Multi-Tenancy/Configure & Install Capsule', '888'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Multi-Tenancy/Overview',
        component: ComponentCreator('/docs/Multi-Tenancy/Overview', '436'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/script/',
        component: ComponentCreator('/docs/script/', '31c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Secrets/CentralizedSecret',
        component: ComponentCreator('/docs/Secrets/CentralizedSecret', 'bbd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Secrets/Configure Vault',
        component: ComponentCreator('/docs/Secrets/Configure Vault', '2db'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Secrets/Install Vault',
        component: ComponentCreator('/docs/Secrets/Install Vault', 'c63'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Secrets/Integrate Vault with helm',
        component: ComponentCreator('/docs/Secrets/Integrate Vault with helm', 'bd6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Secrets/Integrate Vault with Jenkins',
        component: ComponentCreator('/docs/Secrets/Integrate Vault with Jenkins', 'f42'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Single Sign-On with Keycloak/Installation & Configuration of Keycloak',
        component: ComponentCreator('/docs/Single Sign-On with Keycloak/Installation & Configuration of Keycloak', '1ff'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Single Sign-On with Keycloak/Integration with AWX',
        component: ComponentCreator('/docs/Single Sign-On with Keycloak/Integration with AWX', '0e9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Single Sign-On with Keycloak/Integration with Grafana',
        component: ComponentCreator('/docs/Single Sign-On with Keycloak/Integration with Grafana', '5cc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Single Sign-On with Keycloak/Overview',
        component: ComponentCreator('/docs/Single Sign-On with Keycloak/Overview', 'def'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/docs/tutorial-basics/congratulations', '793'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', '68e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/docs/tutorial-basics/create-a-document', 'c2d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/docs/tutorial-basics/create-a-page', 'f44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', 'e46'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/docs/tutorial-basics/markdown-features', '4b7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', 'fdd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docs/tutorial-extras/translate-your-site', '2d7'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'bd0'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
