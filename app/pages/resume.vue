<template>
  <div>
    <div class="gsap-split-text-header mt-40 text-center font-heading leading-normal font-medium text-7xl font-bold text-yellow-300 font-orbitron">
      Experience / Education
    </div>
    <div class="glex justify-center ml-20 mr-20 mt-20">
      <!-- Education -->
      <div class="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 appear-0">
        <table class="table">
          <!-- head -->
          <thead>
            <tr>
              <th />
              <th>Education</th>
            </tr>
          </thead>
          <tbody class="text-lg">
            <!-- row 1 -->
            <tr>
              <td />
              <td>B.S. in Computer Science</td>
              <td>University of Washington</td>
              <td>Jan 2021 - June 2023</td>
            </tr>
            <!-- row 2 -->
            <tr>
              <th />
              <td>A.S. Engineering</td>
              <td>South Seattle College</td>
              <td>April 2012 - 2020</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Experience -->
      <div class="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 mt-20 appear-1">
        <table class="table">
          <!-- head -->
          <thead>
            <tr>
              <th />
              <th>Experience</th>
            </tr>
          </thead>
          <tbody class="text-lg">
            <!-- row 1 -->
            <tr>
              <td />
              <td>Software Developer Engineer L4</td>
              <td>Amazon Web Services</td>
              <td>July 2023 - April 2025</td>
              <td>
                <p class="gsap-split-text-mask-appear">
                  Built backend services using native AWS, using the cloud development kit (CDK) for Amazon products such as DynamoDB,
                  Lambda, ECS, CloudWatch, CloudFormation, Pipelines for CI/CD. Responsible for full software lifecycle, from design doc reviews,
                  implementation, On-Call shifts.
                </p>
              </td>
            </tr>
            <!-- row 2 -->
            <tr>
              <th />
              <td>Software Developer Engineer Intern</td>
              <td>Amazon Web Services</td>
              <td>June 2022 - September 2022</td>
              <td>
                <p class="gsap-split-text-mask-appear">
                  Worked with AWS products to create restful software solutions for internal developer tools. My intern project was to create an indexing plugin to index
                  dev tool assets to an Opensearch domain. Project involved initial design, implementation, integration tests, monitoring performance.
                </p>
              </td>
            </tr>
            <tr>
              <th />
              <td>Web Developer Contract</td>
              <td>G&M Contractors</td>
              <td>November 2022 - January 2023</td>
              <td>
                <p class="gsap-split-text-mask-appear">
                  Created a website for a construction company. Website lead to company receiving more customers due to being
                  visible on Google.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { animateCharsRightToLeftAppearing, animateListItemsUpAppearing } from '../../animations/text';

onMounted(() => {
  // animateTextMaskedAppearing('.gsap-split-text-mask-appear');
  console.log('resume')
  animateCharsRightToLeftAppearing('.gsap-split-text-header');
  animateListItemsUpAppearing('.appear', 2);
});
</script>

<style>

</style>
