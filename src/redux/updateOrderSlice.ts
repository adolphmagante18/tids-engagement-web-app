import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export interface UpdateOrderState {
  loading: boolean;
  error: string;
}

const initialState: UpdateOrderState = {
  loading: false,
  error: '',
}

interface UpdateOrderPayload {
  orderId: string;
  // Include other properties for updating order here
}

export const updateOrder = createAsyncThunk(
  'updateOrder/updateOrder',
  async (payload: UpdateOrderPayload) => {
    const { orderId } = payload
    try {
      // Make the API call to update the order
      // Use payload to update the required properties of the order
      const response = await axios.patch(`http://localhost:3001/order/${orderId}`, payload)
      return response.data
    } catch (error) {
      throw new Error('Failed to update order.')
    }
  }
)

export const updateOrderStatus = createAsyncThunk(
  'updateOrder/updateOrderStatus',
  async (payload: { orderId: string; status: string }) => {
    const { orderId, status } = payload
    try {
      // Make the API call to update the order status
      const response = await axios.patch(`http://localhost:3001/order/updateOrder/${orderId}`, { status })

      return response.data
    } catch (error) {
      throw new Error('Failed to update order status.')
    }
  }
)

export const updateOrderSlice = createSlice({
  name: 'updateOrder',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateOrder.pending, (state) => {
        state.loading = true
        state.error = ''
      })
      .addCase(updateOrder.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(updateOrder.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to update order.'
      })
      .addCase(updateOrderStatus.pending, (state) => {
        state.loading = true
        state.error = ''
      })
      .addCase(updateOrderStatus.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(updateOrderStatus.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to update order status.'
      })
  },
})

export default updateOrderSlice.reducer
