
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rules: [],
};

const rulesSlice = createSlice({
  name: "rules",
  initialState,
  reducers: {
    addRule: (state, action) => {
      state.rules.push(action.payload);
    },

    updateRule: (state, action) => {
      const { id, updatedRule } = action.payload;
      const index = state.rules.findIndex((rule) => rule.id === id);

      if (index !== -1) {
        state.rules[index] = updatedRule;
      }


      const specificProductRuleIndex = state.rules.findIndex(
        (rule) => rule.type === "specific_product" && rule.values.length > 0
      );

      if (specificProductRuleIndex > 0) {
      
        const [specificProductRule] = state.rules.splice(specificProductRuleIndex, 1);
        state.rules.unshift(specificProductRule);
      }
    },

    deleteRule: (state, action) => {
      state.rules = state.rules.filter((rule) => rule.id !== action.payload);
    },
  },
});

export const { addRule, updateRule, deleteRule } = rulesSlice.actions;
export const selectRules = (state) => state.rules.rules;
export default rulesSlice.reducer;
