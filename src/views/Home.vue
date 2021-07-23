<template>
  <b-container class="mt-4" fluid>
    <b-row class="align-items-center">
      <b-col cols="6" class="text-left">
        <div class="text-title">Pages Performance</div>
        <div class="btn-learn-more d-flex align-items-center">
          <b-icon-play-circle-fill
            font-scale="1.75"
            class="mr-2"
          ></b-icon-play-circle-fill>
          Learn more
        </div>
      </b-col>
      <b-col cols="auto" class="ml-auto">
        <b-card class="card-date">
          <div class="body px-3 py-2">
            <svg
              class="mr-2"
              width="21"
              height="12"
              viewBox="0 0 21 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="8" width="6" height="3" rx="1" fill="#007EFF" />
              <rect x="15" width="6" height="3" rx="1" fill="#007EFF" />
              <rect y="4.5" width="6" height="3" rx="1" fill="#007EFF" />
              <rect x="8" y="4.5" width="6" height="3" rx="1" fill="#007EFF" />
              <rect x="15" y="4.5" width="6" height="3" rx="1" fill="#007EFF" />
              <rect y="9" width="6" height="3" rx="1" fill="#007EFF" />
              <rect x="8" y="9" width="6" height="3" rx="1" fill="#007EFF" />
            </svg>
            4 Oct 2019 - 4 Nov 2019
          </div>
          <div class="buttons px-3 py-2">
            <b-row class="align-items-center">
              <b-col cols="3">
                <b-button variant="outline-primary border-0 secondary"
                  >Day</b-button
                >
              </b-col>
              <b-col cols="3">
                <b-button variant="outline-primary border-0 secondary"
                  >Week</b-button
                >
              </b-col>
              <b-col cols="3">
                <b-button variant="outline-primary">Month</b-button>
              </b-col>
              <b-col cols="3">
                <b-button variant="outline-primary border-0 secondary"
                  >Year</b-button
                >
              </b-col>
            </b-row>
          </div>
        </b-card>
      </b-col>
    </b-row>

    <b-row class="mt-5 border-secondary">
      <b-col cols="3">
        <b-card class="card-main">
          <b-card-title class="text-left card-main-text"> 2158 </b-card-title>
          <div class="text-left card-detail">
            Clicks <span class="green">(+ 64.2%)</span>
          </div>
        </b-card>
      </b-col>
      <b-col cols="3">
        <b-card class="card-main">
          <b-card-title class="text-left card-main-text"> 1.8M </b-card-title>
          <div class="text-left card-detail">
            Impressions <span class="green">(+ 78%)</span>
          </div>
        </b-card>
      </b-col>
      <b-col cols="3">
        <b-card class="card-main">
          <b-card-title class="text-left card-main-text"> .12% </b-card-title>
          <div class="text-left card-detail">
            AVERAGE CTR <span class="green">(+ 82%)</span>
          </div>
        </b-card>
      </b-col>
      <b-col cols="3">
        <b-card class="card-main">
          <b-card-title class="text-left card-main-text"> 0 </b-card-title>
          <div class="text-left card-detail">
            AVERAGE POSITION <span class="green">(+ 100%)</span>
          </div>
        </b-card>
      </b-col>
    </b-row>

    <b-row class="mt-5">
      <b-col cols="12" class="text-left">
        <div class="text-title-2">
          Table Title
          <div class="d-inline ml-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 1.71429V14.2857C16 15.2325 15.2325 16 14.2857 16H1.71429C0.7675 16 0 15.2325 0 14.2857V1.71429C0 0.7675 0.7675 0 1.71429 0H14.2857C15.2325 0 16 0.7675 16 1.71429ZM10.8571 9.42857C10.3371 9.42857 9.86347 9.62718 9.50775 9.95254L7.08068 8.49629C7.16357 8.17061 7.16357 7.82936 7.08068 7.50368L9.50775 6.04743C9.86347 6.37282 10.3371 6.57143 10.8571 6.57143C11.9617 6.57143 12.8571 5.676 12.8571 4.57143C12.8571 3.46686 11.9617 2.57143 10.8571 2.57143C9.75257 2.57143 8.85714 3.46686 8.85714 4.57143C8.85714 4.74275 8.87875 4.90904 8.91929 5.06775L6.49221 6.524C6.13654 6.19861 5.66293 6 5.14286 6C4.03829 6 3.14286 6.89543 3.14286 8C3.14286 9.10457 4.03829 10 5.14286 10C5.66293 10 6.13654 9.80139 6.49225 9.47604L8.91932 10.9323C8.87795 11.0945 8.85708 11.2612 8.85718 11.4286C8.85718 12.5332 9.75261 13.4286 10.8572 13.4286C11.9618 13.4286 12.8572 12.5332 12.8572 11.4286C12.8571 10.324 11.9617 9.42857 10.8571 9.42857Z"
                fill="#007EFF"
              />
            </svg>
          </div>
        </div>
      </b-col>

      <b-col cols="12" class="mt-3">
        <b-card class="card-symbol" body-class="px-0 py-0">
          <b-table
            table-class="table-symbol"
            :items="tableItems"
            :fields="tableFields"
            :sort-by.sync="sortBy"
            :sort-desc.sync="sortDesc"
            responsive="sm"
            :outlined="false"
            :striped="true"
            :per-page="perPage"
            :current-page="currentPage"
          >
            <template #cell(date)="data">
              <span class="table-row-date">{{ data.item.date }}</span>
            </template>
            <template #cell(symbol)="data">
              <span class="table-row-symbol">{{ data.item.symbol }}</span>
            </template>
          </b-table>
          <b-pagination
            v-model="currentPage"
            :total-rows="this.tableItems.length"
            :per-page="perPage"
            align="fill"
            size="sm"
            class="my-0"
          ></b-pagination>
        </b-card>
      </b-col>
    </b-row>

    <b-row class="mt-5">
      <b-col cols="12" class="text-left">
        <div class="text-title-2">
          Graph : Table Title
          <div class="d-inline ml-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 1.71429V14.2857C16 15.2325 15.2325 16 14.2857 16H1.71429C0.7675 16 0 15.2325 0 14.2857V1.71429C0 0.7675 0.7675 0 1.71429 0H14.2857C15.2325 0 16 0.7675 16 1.71429ZM10.8571 9.42857C10.3371 9.42857 9.86347 9.62718 9.50775 9.95254L7.08068 8.49629C7.16357 8.17061 7.16357 7.82936 7.08068 7.50368L9.50775 6.04743C9.86347 6.37282 10.3371 6.57143 10.8571 6.57143C11.9617 6.57143 12.8571 5.676 12.8571 4.57143C12.8571 3.46686 11.9617 2.57143 10.8571 2.57143C9.75257 2.57143 8.85714 3.46686 8.85714 4.57143C8.85714 4.74275 8.87875 4.90904 8.91929 5.06775L6.49221 6.524C6.13654 6.19861 5.66293 6 5.14286 6C4.03829 6 3.14286 6.89543 3.14286 8C3.14286 9.10457 4.03829 10 5.14286 10C5.66293 10 6.13654 9.80139 6.49225 9.47604L8.91932 10.9323C8.87795 11.0945 8.85708 11.2612 8.85718 11.4286C8.85718 12.5332 9.75261 13.4286 10.8572 13.4286C11.9618 13.4286 12.8572 12.5332 12.8572 11.4286C12.8571 10.324 11.9617 9.42857 10.8571 9.42857Z"
                fill="#007EFF"
              />
            </svg>
          </div>
        </div>
      </b-col>

      <b-col cols="12" class="mt-3">
        <b-card class="card-symbol">
          <b-container fluid="">
            <b-row>
              <b-col cols="4" class="mb-3">
                <b-input-group prepend="Symbol">
                  <b-form-select
                    v-model="selectedSymbol"
                    :options="symbols"
                  ></b-form-select>
                </b-input-group>
              </b-col>
              <b-col cols="4" class="mb-3">
                <b-input-group prepend="Start Date">
                  <b-form-datepicker
                    id="start-datepicker"
                    v-model="startDate"
                    :min="minDate"
                    :max="endDate"
                  ></b-form-datepicker>
                </b-input-group>
              </b-col>
              <b-col cols="4" class="mb-3">
                <b-input-group prepend="End Date">
                  <b-form-datepicker
                    id="end-datepicker"
                    v-model="endDate"
                    :min="startDate"
                    :max="maxDate"
                  ></b-form-datepicker>
                </b-input-group>
              </b-col>

              <b-col cols="12" class="text-left mb-3">
                <b-overlay
                  :show="loading"
                  rounded
                  opacity="0.6"
                  spinner-small
                  spinner-variant="success"
                  class="d-inline-block"
                  @hidden="onHidden"
                >
                  <b-btn
                    ref="button"
                    :disabled="loading"
                    variant="success"
                    @click="updateData()"
                    >Search</b-btn
                  >
                </b-overlay>
              </b-col>

              <b-col cols="12">
                <Chart :chart-data="stocksData" />
              </b-col>
            </b-row>
          </b-container>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Chart from "@/components/Chart";
import axios from "axios";
import dayjs from "@/plugins/dayjs";

export default {
  name: "Home",
  components: { Chart },
  computed: {
    apiUrl() {
      return `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${this.selectedSymbol}&apikey=TM2B8P45WICFJ82W`;
    },
    minDate() {
      return dayjs().subtract(100, "day").format("YYYY-MM-DD");
    },
    maxDate() {
      return dayjs().format("YYYY-MM-DD");
    },
  },
  data() {
    return {
      symbols: [
        {
          text: "IBM",
          value: "IBM",
        },
        {
          text: "Tesco PLC",
          value: "TSCO.LON",
        },
        {
          text: "Shopify Inc",
          value: "SHOP.TRT",
        },
        {
          text: "GreenPower Motor Company Inc",
          value: "GPV.TRV",
        },
        {
          text: "Daimler AG ",
          value: "DAI.DEX",
        },
        {
          text: "Reliance Industries Limited ",
          value: "RELIANCE.BSE",
        },
        {
          text: "SAIC Motor Corporation",
          value: "600104.SHH",
        },
        {
          text: "China Vanke Company Ltd",
          value: "000002.SHZ",
        },
      ],
      sortBy: "",
      sortDesc: false,
      tableFields: [
        { key: "date", text: "Date", sortable: false, class: "text-left" },
        { key: "symbol", text: "Symbol", sortable: false, class: "text-left" },
        { key: "open", text: "Open", sortable: false, class: "text-left" },
        { key: "high", text: "High", sortable: false, class: "text-left" },
        { key: "low", text: "Low", sortable: false, class: "text-left" },
        { key: "close", text: "Close", sortable: true, class: "text-left" },
      ],
      tableItems: [],
      selectedSymbol: "IBM",
      startDate: dayjs().subtract(10, "day").format("YYYY-MM-DD"),
      endDate: dayjs().format("YYYY-MM-DD"),
      stocksData: [],
      loading: false,
      perPage: 15,
      currentPage: 1,
    };
  },
  created() {
    this.getDataFromApi();
  },
  methods: {
    async getDataFromApi() {
      this.loading = true;
      await axios.get(this.apiUrl).then((response) => {
        let data = response.data["Time Series (Daily)"];
        let filteredData = Object.entries(data)
          .filter((value) => {
            return (
              dayjs(value[0]).isSameOrAfter(this.startDate) &&
              dayjs(value[0]).isSameOrBefore(this.endDate)
            );
          })
          .map((value) => {
            return {
              x: value[0],
              y: [
                parseInt(value[1]["1. open"]),
                parseInt(value[1]["2. high"]),
                parseInt(value[1]["3. low"]),
                parseInt(value[1]["4. close"]),
              ],
            };
          });
        this.stocksData = filteredData;
        this.tableItems = filteredData
          .map((value) => {
            return {
              date: dayjs(value.x).format("D MMMM YYYY"),
              symbol: this.selectedSymbol,
              open: value.y[0],
              high: value.y[1],
              low: value.y[2],
              close: value.y[3],
            };
          })
          .reverse();
      });
      this.loading = false;
    },
    updateData() {
      this.getDataFromApi();
    },
    onHidden() {
      this.$refs.button.focus();
    },
  },
};
</script>

<style lang="scss" src="./Home.scss" scoped></style>
