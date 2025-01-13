---
layout: page
title: Structural Wind-borne debris Impact Risk Assessment Library (SWIRL)
description: A physics-based fluid-structure-debris modeling framework
img: assets/img/tornado_debris_impact/SWIRL_logo.png
importance: 3
category: work
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/tornado_debris_impact/debris_impact_problem.png" title="figure1" class="img-fluid rounded z-depth-0" %}
    </div>
</div>

Wind-borne debris is a significant contributor to structural damage during high-intensity wind events, but existing methods for estimating debris impact loads on structures are relatively limited. These limitations stem from inherent uncertainties and lack of knowledge regarding the characterization of combined wind and debris loads, as well as a lack of computational modeling strategies for representing wind-borne debris impacts and their effects on structures.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/tornado_debris_impact/SWIRL_infrastructure.png" title="figure2" class="img-fluid rounded z-depth-0" %}
    </div>
</div>

The Structural Wind-borne debris Impact Risk assessment Library (SWIRL) is a physics-based fluid-structure-debris modeling framework intended to be coupled with the open source structural analysis software [OpenSEES](https://opensees.berkeley.edu). SWIRL is under active development, and is designed to investigate and quantify of the extent to which wind-borne debris impact contributes to structural damage and collapse. Within this modeling framework, flying debris is represented through discrete realizations of debris trajectories and impacts, with the nonlinear transient dynamic behavior of the structure of interest modeled using OpenSees. Collisions between debris and the structure are resolved through a penalty-based contact enforcement strategy. Parametric vortex models are used to represent the wind field and to determine wind pressures acting on both the structure and the debris.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/tornado_debris_impact/SWIRL_workflow.png" title="figure3" class="img-fluid rounded z-depth-0" %}
    </div>
</div>

Ongoing work currently aims to synthesize geo-located structural reconnaissance data and drone-based 3D orthophotomosaic imaging to characterize the condition of structures and identify other potential wind-borne debris risk factors. Using SWIRL, these datasets will be used to develop representative structural analysis models and wind-borne debris risk maps of vulnerable communities and infrastructure networks to assess the potential for cascading structural damage and estimated economic losses in the face of evolving wind hazards.

SWIRL is an open-souce project, and is available for download and use from [GitHub](https://github.com/bdgiffin/SWIRL). Additional information regarding SWIRL may be found within the accompanying [documentation pages](https://bdgiffin.github.io/SWIRL/index.html).
