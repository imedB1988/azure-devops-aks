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
    component: ComponentCreator('/docs', '844'),
    routes: [
      {
        path: '/docs/10/Configure & Install Capsule',
        component: ComponentCreator('/docs/10/Configure & Install Capsule', '709'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/10/Overview',
        component: ComponentCreator('/docs/10/Overview', '260'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/5/Ansible',
        component: ComponentCreator('/docs/5/Ansible', 'c9b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/5/Configuring AWX',
        component: ComponentCreator('/docs/5/Configuring AWX', '6f9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/5/Installing AWX',
        component: ComponentCreator('/docs/5/Installing AWX', '003'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/5/Introduction',
        component: ComponentCreator('/docs/5/Introduction', '2e4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/5/Serverspec',
        component: ComponentCreator('/docs/5/Serverspec', '63a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/6/Installation & Configuration of Keycloak',
        component: ComponentCreator('/docs/6/Installation & Configuration of Keycloak', '7a3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/6/Integration with AWX',
        component: ComponentCreator('/docs/6/Integration with AWX', '472'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/6/Integration with Grafana',
        component: ComponentCreator('/docs/6/Integration with Grafana', '862'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/6/Overview',
        component: ComponentCreator('/docs/6/Overview', 'f34'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/7/Backup Developer workstation with Veeam',
        component: ComponentCreator('/docs/7/Backup Developer workstation with Veeam', '962'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/7/Backup kubernetes namespace with Kasten10 by Veeam',
        component: ComponentCreator('/docs/7/Backup kubernetes namespace with Kasten10 by Veeam', '7db'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/7/Installatation of Kasten10 by Veaam',
        component: ComponentCreator('/docs/7/Installatation of Kasten10 by Veaam', '434'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/7/Introduction',
        component: ComponentCreator('/docs/7/Introduction', 'd66'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/8/CentralizedSecret',
        component: ComponentCreator('/docs/8/CentralizedSecret', 'fd3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/8/Configure Vault',
        component: ComponentCreator('/docs/8/Configure Vault', 'd09'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/8/Install Vault',
        component: ComponentCreator('/docs/8/Install Vault', '8ca'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/8/Integrate Vault with helm',
        component: ComponentCreator('/docs/8/Integrate Vault with helm', '682'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/8/Integrate Vault with Jenkins',
        component: ComponentCreator('/docs/8/Integrate Vault with Jenkins', 'bf7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/9/CommingSoon',
        component: ComponentCreator('/docs/9/CommingSoon', '437'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/90/Access AWX',
        component: ComponentCreator('/docs/90/Access AWX', 'b7a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/90/Access GCP instance',
        component: ComponentCreator('/docs/90/Access GCP instance', '153'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Application Architecture/Overview',
        component: ComponentCreator('/docs/Application Architecture/Overview', '8a2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Azure DevOps/Configuration of Grafana Dashboards',
        component: ComponentCreator('/docs/Azure DevOps/Configuration of Grafana Dashboards', 'a65'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Azure DevOps/ExposeMetrics',
        component: ComponentCreator('/docs/Azure DevOps/ExposeMetrics', '7b3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Azure DevOps/Installation of Grafana',
        component: ComponentCreator('/docs/Azure DevOps/Installation of Grafana', '393'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Azure DevOps/Installation of Prometheus',
        component: ComponentCreator('/docs/Azure DevOps/Installation of Prometheus', '3a2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Azure DevOps/Overview',
        component: ComponentCreator('/docs/Azure DevOps/Overview', '91e'),
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
        path: '/docs/category/azure-devops',
        component: ComponentCreator('/docs/category/azure-devops', '717'),
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
        path: '/docs/Dockerizing/docker compose',
        component: ComponentCreator('/docs/Dockerizing/docker compose', '6e9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Dockerizing/Dockerfile',
        component: ComponentCreator('/docs/Dockerizing/Dockerfile', '707'),
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
