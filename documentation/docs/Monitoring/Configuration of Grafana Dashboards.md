---
sidebar_position: 5
---
import ReactPlayer from 'react-player'

## Configuration of Grafana Dashboards


### Enabling VPC Peering

In this project, we have two VPCs: one for the developer workstation and one for the GKE cluster. To establish communication between the VPCs, we need to enable VPC peering for both.

For a detailed walkthrough, watch the following video:

<div className="video__wrapper">
    <ReactPlayer className="video__player" controls height="100%" url="/vpcpeering.mov" width="100%" alt="Video: Enabling VPC Peering" />
</div>


### Configuring Grafana Dashboard with Prometheus

Next, we will add Prometheus server as a data source and create a Grafana dashboard.
 For a step-by-step demonstration, watch the following video:


<div className="video__wrapper">
    <ReactPlayer className="video__player" controls height="100%" url="/graf.m4v" width="100%"  />
</div>
